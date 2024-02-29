// import Image from "next/image";
// import Link from "next/link";



// export default function Home() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         backgroundColor: "lightgray",
//       }
//       }
//     >
//       <h1>Hello World</h1>
//       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//       <div>
//         <Link href={"/second"}>
//           To the second
//         </Link>
//         <br />
//         <Link href={"/third"}>
//           To the third
//         </Link>
//       </div>
//     </div>
//   );
// }

// function third() {
//   return <div>third</div>;
// }
// export { third };

import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }
    }>
      <Image src="/background.jpg" alt="background" layout='fill' style={ {zIndex : -1} } />
      <header>
        {/* Navigation bar */}
      </header>
      {/* Main content */}
      <main>
        {/* Profile section */}
        <section>
          <div>
            <Image src="/ryota.jpg" alt="Ryota's photo" width={ 150 } height={ 150 } style={
              {
                borderRadius: "50%",
              }
            } />
            <h1 style={
              {
                fontSize: "2em",
                color: "white",
              }
            }>黒川 良太</h1>
            <p style={
              {
                fontSize: "1.5em",
                color: "white",
              }
            
            }>関西学院大学工学部情報工学課程 26卒<br />Tech.Uni 渉外担当<br />A mobile app developer</p>
            {/* Social media icons */}
            <div style={ 
              {
                display: "flex",
                justifyContent: "start",
                gap: "20px",
                margin: "20px",
              }
            }>
              <a href="https://twitter.com/ryota1582" target="_blank">
                <Image src="/icon-x.png" alt="Twitter" width={60} height={60} />
              </a>
              <a href='https://zenn.dev/ryota1582' target="_blank">
                <Image src="/logo-only-dark.png" alt="Zenn" width={60} height={60} />
              </a>
              <a href='https://qiita.com/ryota1582' target="_blank">
                <Image src="/3030225.webp" alt="Zenn" width={60} height={60} />
              </a>
              <a href='https://github.com/Ryota-Kurokawa' target="_blank">
                <Image src="/github_logo_icon_143772.png" alt="Zenn" width={60} height={60} />
              </a>
              {/* Add similar links for other social media */}
            </div>
          </div>
          <Link href="/second" style={ 
            {
              color: "white",
              fontSize: "1.5em",
              textDecoration: "none",
              margin: "10px",
              // 下に空白を追加
              display: "block",
              }}>
            →skill
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
