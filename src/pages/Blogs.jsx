import React from 'react';
import AllBlogs from '../Components/AllBlogs'
import Tittle from '../Components/Tittle';

const Blogs = () => {
    return (
        <>
            <div className="blog-title">
                <Tittle title="Blogs" span={"Blogs"} />
            </div>
            <div className="blog-coming">
                <h3>Blog Page Coming Soon</h3>
            </div>
            {/* <div className="BlogPage">
                {
                    AllBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div> */}
        </>
    );
};

export default Blogs;