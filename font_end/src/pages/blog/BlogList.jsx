import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Search, Calendar, ArrowRight, Loader2 } from 'lucide-react';

const BlogCard = ({ image, date, title, tags, excerpt, id }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-oouth-500 text-white px-3 py-1 rounded-full text-sm">
                    {tags}
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {new Date(date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-oouth-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {excerpt}
                </p>
                <Link
                    to={`/news/${id}`}
                    className="flex items-center text-oouth-600 hover:text-blue-700 transition-colors"
                >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs`);
                // Sort blogs by date in descending order (newest first)
                const sortedBlogs = response.data.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );
                setBlogs(sortedBlogs);
                setError(null);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Filter blogs based on search term
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">OOUTH News & Updates</h1>
                <p className="text-lg text-gray-600">
                    Stay informed about the latest developments and news at OOUTH
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search news by title, content, or tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-oouth-500 focus:border-oouth-500"
                    />
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg ${
                                currentPage === page
                                    ? 'bg-oouth-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            {/* No Results Message */}
            {filteredBlogs.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No news articles found matching your search criteria.</p>
                </div>
            )}
        </div>
    );
};

export default BlogList;