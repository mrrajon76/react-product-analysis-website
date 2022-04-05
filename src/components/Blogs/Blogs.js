import React from 'react';
import q1 from '../../images/q1.jpg';
import q2 from '../../images/q2.jpg';
import q3 from '../../images/q3.jpg';

const Blogs = () => {
    return (
        <div className='mx-5 md:mx-12 lg:mx-28 my-12 lg:mt-16'>
            <section className="grid grid-cols-1 md:grid-cols-3 shadow-lg shadow-slate-300">
                <div className="my-0 md:my-5 lg:my-0">
                    <img src={q1} alt="" />
                </div>
                <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What is Context API?</h3>
                        <p className="mt-3">React Context API is a React structure that provides us a way to pass data through the component tree without passing
                            on every level manually using props. Suppose we have a component tree like that: A - B - C - D - E - F
                            <br /><br />
                            So here, if we want to pass data from A to the F component then we can't pass it directly. Because the F component is not a
                            child of the A component. We need to pass the data manually to every child using props to reach the F component. Here React
                            introduced the Context API. We can pass the data directly from the A component to the F component using Context API.
                            It gives our components the ability to communicate and share data at different levels</p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 shadow-lg shadow-slate-300 mt-12">
                <div className="my-0 md:my-5 lg:my-0">
                    <img src={q3} alt="" />
                </div>
                <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What is Semantic tags?</h3>
                        <p className="mt-3">The Semantic tags clearly define the purpose of the element and what is inside the element to both the browser and developer.
                            It has great accessibility, not only for developers and browsers but also for search engines.<br /><br />
                            Generally, we use the &lt;div&gt; tag to create a header of our page which is a non-semantic tag. But instead of &lt;div&gt;
                            if we use &lt;header&gt;, it clearly defines that this is a header of the page. Because &lt;header&gt; is a semantic tag. As
                            like this scenario, if we use &lt;nav&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;section&gt; instead of &lt;div&gt;
                            then it will be easy to identify what sort of information would go in. These tags act more or less like &lt;div&gt; but for better accessibility, we need to use semantic tags.</p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 shadow-lg shadow-slate-300 mt-12">
                <div className="my-0 md:my-5 lg:my-0">
                    <img src={q2} alt="" />
                </div>
                <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What are the difference between Block, Inline & Inline-Block?</h3>
                        <p className="mt-3">Block, Inline & Inline-block are the display properties of CSS. These properties specify the display behavior of an element.
                            <br />
                            <br />
                            <b>Block</b> elements always start on a new line and they take the entire width of the horizontal spaces. We can use margin, padding, height, width properties on a block element.
                            Example: div, p, h1-h6, li, section. <b>Inline</b> elements appear on the same line. We can't use height, width, margin(top, bottom), padding(top, bottom) properties on an inline element. It takes the same height & width of the object.
                            Example: span, a, img. <b>Inline-block</b> elements are the same as inline elements, just we can use height, width, margin(all sides), padding(all sides).</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;