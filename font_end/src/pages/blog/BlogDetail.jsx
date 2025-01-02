import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Calendar, Tag, Loader2 } from 'lucide-react';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`);
                setBlog(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError('Failed to fetch blog post');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <p className="text-red-500">{error}</p>
                <Link to="/news" className="text-oouth-500 hover:text-oouth-600 mt-4 inline-block">
                    Back to News
                </Link>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <p>Blog post not found</p>
                <Link to="/news" className="text-oouth-500 hover:text-oouth-600 mt-4 inline-block">
                    Back to News
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back Button */}
            <Link
                to="/news"
                className="inline-flex items-center text-oouth-500 hover:text-oouth-600 mb-8"
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
            </Link>

            {/* Blog Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {blog.title}
                </h1>
                <div className="flex flex-wrap items-center text-gray-600 gap-4">
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                    {blog.tags && (
                        <div className="flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            <span className="bg-oouth-100 text-oouth-800 px-2 py-1 rounded-full text-sm">
                                {blog.tags}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
                <div className="mb-8 rounded-lg overflow-hidden">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            )}

            {/* Blog Content */}
            <div className="prose max-w-none">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            {/* Share and Navigation Section */}
            <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                    <button className="px-6 py-2 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors">
                        Share Article
                    </button>
                </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* You can add related articles here */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;