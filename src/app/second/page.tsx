'use client';
import Image from 'next/image';
import Slider from "../carousel";
import Slider2 from "../carousel2";
import Link from 'next/link';


const Second = () => {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    }>
      <div style={
        {
          position: "relative",
          width: "50%",
          height: "50%",
          display: "flex",
          // backgroundColor: "gray",
          alignItems: "center",
          // opacity: 0.8,
        }
      }>
        <Slider />
      </div>
      <div style={
        {
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          color: "white",
          display: "flex",
        }
      }>
        <Link href="/" style={
          {
            color: "grey",
            fontSize: "1.5em",
            textDecoration: "none",
            margin: "50px",
            padding: "10px",
          }}>
          Back to Home
        </Link>
      </div>
      <div style={
        {
          width: "100%",
          height: "100%",
          display: "flex",
        }
      }>
        <Slider2 />
      </div>
      <Image src="/background.jpg" alt="background" layout='fill' style={{ zIndex: -1 }} />
    </div>
  );
}

export default Second;