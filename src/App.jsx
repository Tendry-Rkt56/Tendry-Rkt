import { Layout } from "./components/Layout/Layout";
import { About } from "./components/about/About";
import { Competence } from "./components/competence/Competence";
import Footer from "./components/footer/footer";
import { Home } from "./components/home/Home";
import Message from "./components/message/Message";
import { NavBar } from "./components/navbar/NavBar";
import { Project } from "./components/project/project";
import { Service } from "./components/service/Service";
import { ThemeProvider } from "./context/ThemeContext";
import { UseNavBar } from "./hooks/useNavBar";

function App () {

    UseNavBar()

    return (
        <ThemeProvider>
            <Layout>
                <NavBar/>
                <Home/>
                <About/>
                <Service/>
                <Competence/>
                <Project/>
                <Message/>
                <Footer/>
            </Layout>
        </ThemeProvider>
    )

}

export default App
