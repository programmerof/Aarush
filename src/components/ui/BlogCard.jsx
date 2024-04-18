import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ blog }) => {
  const { title, featuredImage, excerpt, slug } = blog.fields

  return (
    <Link href={`/blog/${slug}`}>
      <div className="blog-card">
        <Image
          src={'https:' + featuredImage.fields.file.url}
          alt={featuredImage.fields.title}
          width={500}
          height={300}
          className="w-full h-auto"
        />
        <h2 className="text-xl font-bold my-2">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
      </div>
    </Link>
  )
}

export default BlogCard

