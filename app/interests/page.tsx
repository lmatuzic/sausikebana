import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../(ui)/components/shadcn/Card';

const getNewsAPITestNews = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=nextjs&language=en&apiKey=8602734896044be19f8acb8e3a7e7882`
	);

	const news = await response.json();
	return news;
};

export default async function Interests() {
	const news = await getNewsAPITestNews();
	return (
		<div className='container'>
			<h1>Interests</h1>

			{news.articles.map((article: any) => {
				return (
					<Card key={article.title} className='my-8'>
						<CardHeader>
							<CardTitle>{article.title}</CardTitle>
							<CardDescription>{article.description}</CardDescription>
						</CardHeader>

						<CardContent>
							<p>{article.content}</p>
						</CardContent>

						<CardFooter>
							URL: <Link href={article.url}></Link>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
}
