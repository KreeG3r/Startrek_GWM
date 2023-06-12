import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <img src="assets/images/GWMLOGO.png" alt="Logo" class="max-w-xs p-0 m-0"/>
        <span> <img src="assets/images/STRKMTR.png" alt="STRKMTRLogo" class="w-screen max-w-xs p-0 m-0" />
          </span>
      <p className="desc text-center" class="p-0 m-0" >
      โชว์รูมที่ทันสมัย พร้อมศูนย์บริการซ่อมรถยนต์ ศูนย์ซ่อมตัวถัง-สีมาตรฐานครบวงจร
      </p>

      <Feed />
    </section>
  )
}
export default Home