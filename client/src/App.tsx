import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";
import Footer from "./components/Footer"
import Education from "./components/Education";

const App: React.FC = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[var(--color-bg)] overflow-x-hidden"
            style={{ fontFamily: "var(--font-main)" }}
        >
            <div className="layout-container flex h-full grow flex-col mb-40">
                <Header />
                <FadeInSection><Hero /></FadeInSection>
                <FadeInSection><About /></FadeInSection>
                <FadeInSection><Experience /></FadeInSection>
                <FadeInSection><Skills /></FadeInSection>
                <FadeInSection><Projects /></FadeInSection>
                <FadeInSection><Education /></FadeInSection>
                <FadeInSection><Contact /></FadeInSection>
                <FadeInSection><Footer /></FadeInSection>
            </div>
        </div>
    );
};

export default App;