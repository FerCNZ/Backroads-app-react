import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            rerum, error soluta modi neque voluptatum quos pariatur fuga cum
            illum natus sequi nisi minima optio exercitationem quas, ut culpa.
            Veritatis? Quasi quas molestias molestiae omnis deserunt libero
            aspernatur illum, aperiam doloremque, quisquam ea, itaque repellat
            excepturi quia voluptatem adipisci. Voluptas obcaecati repudiandae
            facere optio possimus quod nesciunt eius maiores tempora.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
