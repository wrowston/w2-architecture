import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../../components/Card/Card';
import './Services.css'
import '../../App.css';
import ServiceSrc from '../../images/w2-services-1.png'

type ServicesProps = {}

export const Services = (props: ServicesProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const servicesList = [
        {
            title: "CUSTOM HOME ARCHITECTURE",
            description: "We specialize in bringing your vision of a custom home to life. Big or small, full custom or value oriented design, our job as architects is to make the perfect home for you.",
            image: ServiceSrc
        },
        {
            title: "REMODELS AND ADDITIONS",
            description: "Adding onto your existing home? Need a great new indoor/outdoor space to take advantage of the beautiful outdoors here? Give us a call.",
            image: ServiceSrc
        },
        {
            title: "CONSULTING",
            description: "We are here to help with anything related to design and construction.",
            image: ServiceSrc
        }
    ]


    return (
        <div className='container'>
            <div className='service-container' style={{ marginTop: isMobile ? "44px" : "64px" }}>
                <div className='service-header'>
                    We offer a variety of services at W2.
                </div>

                {servicesList.length === 0 ? (
                    <div>No Services available at this time</div>
                ) : (
                    <div>
                        {servicesList.map((service, i) => {
                            return (
                                <Card key={i}>
                                    {i % 2 !== 0 ?
                                        <div className='service-inner-card'>
                                            <div className='service-card-text'>
                                                <div className='service-title'>
                                                    {service.title}
                                                </div>
                                                <div className='service-description'>
                                                    {service.description}
                                                </div>
                                            </div>
                                            <div className='service-image-container' style={{ justifyContent: 'flex-end' }}>
                                                <img className='service-card-image' src={service.image} alt={service.title} style={{ margin: "25px", maxWidth: isMobile ? "50%" : undefined }} />
                                            </div>
                                        </div>
                                        :
                                        <div className='service-inner-card'>
                                            <div className='service-image-container'>
                                                <img className='service-card-image' src={service.image} alt={service.title} style={{ margin: "25px", maxWidth: isMobile ? "50%" : undefined }} />
                                            </div>
                                            <div className='service-card-text'>
                                                <div className='service-title'>
                                                    {service.title}
                                                </div>
                                                <div className='service-description'>
                                                    {service.description}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}