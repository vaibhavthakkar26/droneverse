import { getPageContent } from "@/lib/api";

export default async function Page({ params }) {
    const data = await getPageContent(params.slug);

    if (!data) return <h1>Page not found</h1>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    );
}
