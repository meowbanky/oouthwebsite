const { Blog } = require('../models');
const { Op } = require('sequelize');

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            order: [['date', 'DESC']]
        });
        res.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: error.message });
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: error.message });
    }
};

const createBlog = async (req, res) => {
    try {
        const { title, excerpt, content, image, tags } = req.body;
        const blog = await Blog.create({
            title,
            excerpt,
            content,
            image,
            tags
        });

        res.status(201).json(blog);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getBlogs,
    getBlog,
    createBlog
};