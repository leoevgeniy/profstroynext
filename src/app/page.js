'use client';
import {otziv} from '@/js/otziv';
import 'bootstrap/dist/css/bootstrap.css'
// import '../js/index'
// import fontsize from "@/js";
// import {toggle} from '@/js/otzivarr'
import Image from "next/image";
import brigadatitle from '@/images/brigadatitle.jpg'
import location from '@/images/location.jpg'
import mainimg from '@/images/mainimg.png'
import bani from '@/images/bani.jpg'
import besedki from '@/images/besedki.jpg'
import zabor from '@/images/zabor.jpg'
import roof from '@/images/roof.jpg'
import road from '@/images/road.jpg'

import {useEffect, useState} from "react";
import fontsize from "@/js/index";
import {Col, Row} from "react-bootstrap";

export default function Home() {
    const size = useWindowSize();

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // only execute all the code below in client side
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    let titleWidth = 0
    useEffect(() => {
        if (typeof window !== 'undefined') {
            fontsize()

        }
    }, [size]);
    const [opened, setOpened] = useState(false)
    const arrowHandler = () => {
        // while (document.querySelector('.otziv-array').firstChild) {
        //     console.log(document.querySelector('.otziv-array').firstChild)
        //     document.querySelector('.otziv-array').removeChild(document.querySelector('.otziv-array').firstChild)
        // }
        setOpened(!opened)
        const arrow = document.querySelector('.arrow-4').classList.toggle('open')
    }

    return (
        <>
            <header className='header'>
                <div className="container header-line d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone-fill h-75 text-black my-auto" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <span className="my-auto text-black phone">8-984-000-73-73</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone-fill h-75 text-black my-auto" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <span className="my-auto text-black phone">8-960-366-75-83</span>
                </div>
            </header>

            <main className="ratio ratio-1x1 container main">
                <div className="title d-flex flex-column justify-content-start">
                    <Image layout='responsive' width={titleWidth} src={brigadatitle} alt="Стрительная бригада"
                           className="brigada-title"/>

                    <Image layout='responsive' width={titleWidth} src={location}
                           alt="Работаем по Ульяновску и Ульяновской области"
                           className="location-title"/>

                    <Image layout='responsive' width={titleWidth} src={mainimg} alt="Работаем командой"/>
                    <p className="no-avans text-end">Работаем <strong>БЕЗ ПРЕДОПЛАТЫ И АВАНСА</strong><br/>
                        Выезд мастера на замер <strong>БЕСПЛАТНО</strong>
                    </p>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="callme ms-auto">
                        Отправить заявку
                    </button>
                </div>
                <div className="sections">
                    <p className="text-uppercase"> все виды работ <strong className="text-decoration-underline">из
                        нашего
                        материала</strong>
                    </p>
                    <div className="d-flex first-line">
                        <div className="item">
                            <Image layout='responsive' src={bani} className="" alt='Строим бани, хозблоки'/>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>БАНИ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ХОЗБЛОКИ</span>
                            </div>
                        </div>
                        <div className="item">
                            <Image layout='responsive' src={besedki} alt='Строим беседки, веранды, террасы'
                                   className=""/>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>БЕСЕДКИ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ВЕРАНДЫ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ТЕРРАСЫ</span>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex second-line ">
                        <div className="item">
                            <Image layout='responsive' src={zabor} alt='Строим заборы, перегородки' className="bani"/>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ЗАБОРЫ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ПЕРЕГОРОДКИ</span>
                            </div>
                        </div>
                        <div className="item">
                            <Image layout='responsive' src={roof} alt='устанавливаем сайдинг, крыши, окна'
                                   className="bani"/>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>САЙДИНГ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>КРЫШИ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ОКНА</span>
                            </div>
                        </div>
                        <div className="item">
                            <Image layout='responsive' src={road} alt='Дорожки, стяжки' className=""/>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>ДОРОЖКИ</span>
                            </div>
                            <div className="info d-flex">
                                <div className="pixel my-auto"></div>
                                <span>СТЯЖКИ</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <div className="d-block container text-center mb-2">
                <p className="mt-3 our-products"
                   style={{fontStyle: 'italic', fontSize: '30px', fontWeight: '700', color: '#264465'}}>НАШИ РАБОТЫ</p>
                <div className="my-jobs ratio ratio-16x9 container"></div>
            </div>
            <div className="request w-100 d-block container text-center text-white"
                 style={{backgroundColor: '#264465'}}>
                <p className="pt-5 skidka"> Оставьте заявку и
                    получите скидку</p>
                <p className="mt-3 skidka"> 10% на услуги</p>
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="my-3 skidka-button">Отправить
                    заявку
                </button>

            </div>
            <div className="otziv d-block container text-center">
                <p className="pt-3">Отзывы
                    наших
                    заказчиков</p>
                <Row className="otziv-array m-5">
                    {otziv.map((otz,index) => {
                        if (!opened && index > 5) {
                            return ''
                        } else {return (
                            <Col key={otz.otziv} className='col-lg-4 col-md-6 col-12 text-start my-3'>
                                <h4 className="fs-lg-4, fs-5">{otz.name}</h4>
                                <div className="stars d-flex">{[...Array(otz.stars).keys()].map(star =>
                                    <div key={star} id="star"></div>
                                )
                                }
                                </div>
                                <div className="fs-lg-6 fs-6 otziv">{otz.otziv}</div>
                            </Col>)}
                        }
                    )}

                </Row>
                <div className="arrow-4 m-auto mb-3" onClick={arrowHandler}>
                    <span className="arrow-4-left"></span>
                    <span className="arrow-4-right"></span>
                </div>

            </div>
            <footer className="d-block container text-start w-100 footer">
                <p className="mx-5 pt-3 text-white title">ВСЕГДА ОТКРЫТЫ К СОТРУДНИЧЕСТВУ</p>
                <div className="d-flex justify-content-around constacts">
                    <div className="text-white lh-1 text-center">
                        <p className="p-title"><strong>Телефоны</strong></p>
                        <div className="d-flex justify-content-center align-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                 className="bi bi-telephone-fill h-75 text-white my-auto me-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <div>
                                <p className="p-footer">8-984-000-73-73</p>
                                <p className=" p-footer">8-960-366-75-83</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white lh-1 text-center">
                        <p className="p-title"><strong>E-MAIL</strong></p>
                        <div className="d-flex justify-content-center align-content-center">
                            <p className="p-footer">support@profstroy73.ru</p>
                        </div>
                    </div>
                    <div className="text-white lh-1 text-center d-none d-md-block ">
                        <p className="p-title"><strong>Режим работы</strong></p>
                        <div className="">
                            <p className="p-footer">Пн-Вс: с 8:00 до 19:00</p>
                            <p className="p-footer">БЕЗ ВЫХОДНЫХ</p>
                        </div>
                    </div>

                </div>
            </footer>
            <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="callbackLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Оставьте свои данные и мы перезвоним</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <input id="number" type="numric" placeholder="+70000000000"/>
                            <input id="name" type="text" placeholder="name"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" id="callme"
                                    data-bs-dismiss="modal">Перезвонить
                                мне
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
