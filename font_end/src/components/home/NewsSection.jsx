import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

const NewsSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs`);
                setBlogs(response.data);
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

    if (loading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    return (
        <section className="py-16 bg-gray-50" id="news">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Latest News</h2>
                    <p className="text-gray-600">Stay updated with the latest news and updates from OOUTH</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(0, 3).map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/news"
                        className="px-8 py-3 bg-oouth-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;