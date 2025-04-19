export default function BlogPostPage({ params }){
    return (
        <main>
            <h1>Blog Post</h1>
            <h2>{params.slug}</h2>
            <p>This is a blog post.</p>
        </main>
    );
}