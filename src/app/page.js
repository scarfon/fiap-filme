import { CardFilme } from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

export default function Home() {
	const filmes = [
		{
			titulo: "Star Wars: A Ascensão Skywalker",
			image:
				"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
			nota: 6.6,
		},
		{
			titulo: "Barbie",
			image:
				"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
			nota: 7.1,
		},
		{
			titulo: "Frozen II",
			image:
				"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
			nota: 7.3,
		},
		{
			titulo: "O Irlandês",
			image:
				"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
			nota: 8.2,
		},
		{
			titulo: "O Rei Leão",
			image:
				"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
			nota: 7.1,
		},
	];

	return (
		<>
			<nav className="bg-slate-900 p-4">
				<h1 className="text-3xl font-bold">Fiap Filmes</h1>
			</nav>

			<Titulo texto="em alta" />
			<section className="flex">
				{filmes.map((filme) => (
					<CardFilme filme={filme} />
				))}
			</section>

			<Titulo texto="lançamentos" />
		</>
	);
}
