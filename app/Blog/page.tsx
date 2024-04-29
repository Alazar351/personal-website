import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div>
      <h2 className="text-[32px] font-semibold">Blog</h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Insights, thoughts and trends in development
      </p>
      <BlogCard />
    </div>
  );
}
