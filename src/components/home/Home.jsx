import React from "react";
import "./home.css"; // Estilo CSS para el componente Home

function Home() {
    return (
        <>
        <div className="home-container">
            <header className="header">
                <h1>Bienvenido a GinoCodeLab Courses</h1>
                <p>Donde el aprendizaje nunca termina</p>
            </header>
            <main className="main-content">
                <section className="course-categories">
                    <h2>Categorías de Cursos</h2>
                    <ul>
                        <li>Tecnología</li>
                        <li>Desarrollo Web</li>
                        <li>Diseño Gráfico</li>
                        <li>Programación</li>
                        <li>Marketing Digital</li>
                        <li>Música</li>
                    </ul>
                </section>
                <section className="about-platform">
                    <h2>Acerca de Nosotros</h2>
                    <p>
                        En GinoCodeLab Courses, estamos comprometidos a brindarte una
                        experiencia de aprendizaje en línea excepcional. Nuestra plataforma
                        ofrece una amplia variedad de cursos en diversas temáticas, impartidos
                        por instructores expertos.
                    </p>
                </section>
            </main>
        </div>
        </>
    );
}

export default Home;
