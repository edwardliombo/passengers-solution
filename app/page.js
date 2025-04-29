import Banner from "@/app/components/Banner"
import Card from "@/app/components/Cards"
import Title from "@/app/components/Title"
import Profile from "@/app/components/Profile"
import Footer from "@/app/components/Footer"
import Missionvission from "@/app/components/Missionvission"
import db from "@/app/data/db"
import Information from "@/app/components/Information"

export default async function Home() {
  const dataFetch = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a4d68a0a30cb49eeadc3fe8bff763b31");
  const fetched = await dataFetch.json();
  const data = fetched.articles;
  


 return(
    <section className="grid grid-cols-1 justify-center">
      <Banner />
      <Profile />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 bg-sky-500">
        {db.map((vis)=>(
          <Missionvission key={vis.id} head={vis.title} icon={vis.icon} desc={vis.description} />
        ))}
        
      </div>
      <Information />
      <Title title="Today Updates:" />
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-4 mt-3 p-4">
        {
        
        data.map((item)=>(
          <Card key={item.title} author={item.author} title={item.title} description={item.description} image={item.urlToImage} date={item.publishedAt} />
        ))}

      </div>
      <Footer />
    </section>
 )
}
