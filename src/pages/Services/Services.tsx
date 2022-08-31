import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../../components/Card/Card';
import './Services.css'
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
        <div className='service-container'>
            {servicesList.length == 0 ? (
                <div>No Services available at this time</div>
            ) : (
                <div>
                    {servicesList.map((service, i) => {
                        return (
                            <Card style={{ marginTop: isMobile ? "25px" : "50px" }}
                                key={i}>
                                <div>
                                    <div>
                                        {service.title}
                                    </div>
                                    <div>
                                        {service.description}
                                    </div>
                                    <img src={service.image} style={{ marginTop: "50px", maxWidth: isMobile ? "50%" : undefined }} />
                                </div>
                            </Card>
                        )
                    })}
                </div>
            )}
        </div>
    )
}