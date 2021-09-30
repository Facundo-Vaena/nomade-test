import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Col, Row, Divider, Typography, Card, Button } from 'antd';
import { StarTwoTone, ArrowLeftOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

export function SecondScreen({ data }) {

    const { profile_path, name, gender, popularity, known_for } = data;

    useEffect(() => {
        console.log(profile_path);
    }, [])

    return (

        <div style={{ width: 1400 }}>

            <Row span={24}>
                <Col>
                <div style={{marginTop:'16%', marginBottom:'-4%', marginLeft:'15%'}}>
                <NavLink to='/'><Button type="primary" icon={<ArrowLeftOutlined size={80} />}>Regresar</Button></NavLink>
                </div>
                </Col>
            </Row>
            {/* <Col>
                    <Row span={24}>
                        <button>Regresar</button>
                    </Row>
                </Col> */}
            <Divider />
            <Row>

                <Col span={6} style={{ height: 360 }}>
                    <img style={{ width: 120 }} src={`http://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
                    <Title level={2}>{name}</Title>
                    <Title level={4}>{gender && gender === 2 ? 'Hombre' : 'Mujer'}</Title>
                    <Title level={4}>Popularidad: {popularity}</Title>
                </Col>
                <Divider type='vertical' style={{ height: 360 }} />
                <Col span={12}>
                    <Title style={{ display: 'flex', justifyContent: 'flex-start' }}>Películas:</Title>
                    <Divider />
                    {known_for.map(movie => (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Title level={2}>{movie.title}</Title>
                                <div style={{display:'flex',}}>
                                    <Title level={4}>{movie.vote_average}</Title>
                                    <div style={{marginTop:'8%', marginLeft:'6%'}}>
                                    <StarTwoTone twoToneColor='#F28500'/>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: 120 }} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                <div>
                                    <p>{movie.overview}</p>
                                    <Title level={5} style={{ display: 'flex', justifyContent: 'flex-start' }}>Fecha de estreno: {movie.release_date}</Title>
                                </div>
                            </div>
                            <Divider style={{ paddingRight: 1040 }} />
                        </>
                    ))}
                </Col>

            </Row>
        </div>


        // <div>
        //     <h1>SecondScreen</h1>
        //     <img src={`http://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
        //     <h2>{name}</h2>
        //     <h2>{gender === 1 ? 'Mujer' : 'Hombre'}</h2>
        //     <h2>{popularity}</h2>
        //     {/* <button><Link to='/'>Frst Screen</Link></button> */}
        //     <button><NavLink to='/'>Frst Screen</NavLink></button>
        // </div>
        // <>
        //     <Row>
        //         {/* <Col span={6} order={1}>
        //         Hola
        //     </Col>
        //     <Col span={6} order={3}>
        //         Chau
        //     </Col> */}
        //         <Divider>
        //             <Col span={24}>
        //                 Entero?
        //             </Col>
        //         </Divider>
        //         {/* <Divider> */}
        //             <Col flex={2}>
        //                 {/* <Card
        //                 style={{ width: 240 }}
        //                 cover={<img src={`http://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />}
        //             >
        //                 <Meta title={name} description={popularity} />
        //             </Card> */}
        //             <Title level={2}>{name}</Title>
        //             <Title level={4}>Popularidad: {popularity}</Title>
        //             </Col>
        //         {/* </Divider> */}
        //         {/* <Divider> */}
        //         <Divider type="vertical">
        //             <Col flex={3}>
        //                 Chau
        //             </Col>
        //             </Divider>
        //         {/* </Divider> */}
        //     </Row>

        //</>
    )
}


//                        <img src={`http://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />


function mapStateToProps(state) {
    return {
        data: state.data,
    }
}
export default connect(mapStateToProps)(SecondScreen);
