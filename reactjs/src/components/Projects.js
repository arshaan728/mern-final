
import {Container , Row, Col,Tab,Nav} from 'react-bootstrap';
import {ProjectCard} from '../components/ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { Languages } from '../components/Languages';
import Getbook from './Getbook';
import { CardAPI } from './CardAPI';
export const Projects = () =>{
    const projects =[
        {
            title:'Face recognition system with hand gesture ',
            description:'Python , Flask , ML ',
            imgUrl: 'https://images.ctfassets.net/3viuren4us1n/5YzA7KGIWQEjt8KStZGlxd/85bde9966a9e9c4407396f424e46fc67/facial_recognition.jpg?fm=webp&w=828',
        },
        {
            title:'Car Selling App',
            description:'Laravel , PHP , Javascript , css , OOP',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwneKuk8yajOmiGywanAJqXu_nwUZut5IcetcjcxtNCN4cKR1N8lqy51CaPX2s8zHa4c&usqp=CAU',
        },
        {
            title:'Shopping Cart',
            description:'Java , ORM , Android studio',
            imgUrl: 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/08/android.png',
        },
        {
            title:'Run a website using aws ',
            description:' Dynamo DB, EC2 , S3 bucket',
            imgUrl: 'https://intellipaat.com/blog/wp-content/uploads/2022/01/image-134.png',
        },
        {
            title:'Design patterns and MYSQL',
            description:'JAVA SWING and GUIS , MYSQL , Selenium ',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu6FROvDQJ0BlzAZfap62foHFZxoGutk3MWBMhdm9lHp6Mm5f3l3LXT1Ro_Hjr1nHCec&usqp=CAU',
        },
      
        
      

    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Work experience and projects </p>

                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                Tab Three
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                               <ProjectCard
                                               key = {index}
                                               {...project}
                                               />
                                               
                                            )
                                        })
                                        
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                               <Languages/>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                            <CardAPI/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='stuff'></img>
        </section>
    )
}