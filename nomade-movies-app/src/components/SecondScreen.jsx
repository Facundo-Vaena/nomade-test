import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Col, Row, Divider, Typography, Button } from 'antd';
import { StarTwoTone, ArrowLeftOutlined } from '@ant-design/icons';
import {
    DivContainer, RegresarDiv,
    StyledImg, ActorInfoContainer,
    DisplayFlex, FirstMovieDiv,
    StarDiv, MovieImg, SecondMovieDiv
} from '../styles/Second';

const { Title } = Typography;

export function SecondScreen({ data }) {

    const { profile_path, name, gender, popularity, known_for } = data;
    const history = useHistory();
    let randomKey = 0;
    const genero = { 1: 'Mujer', 2: 'Hombre' }
    const mes = {
        '01': 'enero', '02': 'febrero', '03': 'marzo', '04': 'abril', '05': 'mayo', '06': 'junio',
        '07': 'julio', '08': 'agosto', '09': 'septiembre', '10': 'octubre', '11': 'noviembre', '12': 'diciembre'
    }
    const goHome = () => history.push('/');


    useEffect(() => {
        !data && goHome();
    }, [])

    return (

        <DivContainer>

            <Row span={24}>
                <Col>
                    <RegresarDiv>
                        <NavLink to='/'><Button type="primary" icon={<ArrowLeftOutlined size={80} />}>Regresar</Button></NavLink>
                    </RegresarDiv>
                </Col>
            </Row>

            <Divider />

            <Row>

                <Col span={6} style={{ height: 360 }}>

                    <StyledImg src={`http://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />

                    <ActorInfoContainer>
                        <Title level={2}>{name}</Title>
                        <Title code level={4} >{genero[gender]}</Title>
                        <Title level={4}>Popularidad: {popularity}</Title>
                    </ActorInfoContainer>

                </Col>

                <Divider type='vertical' style={{ height: 1040 }} />

                <Col span={12}>

                    <Title style={{ display: 'flex', justifyContent: 'flex-start' }}>Pel??culas:</Title>

                    <Divider style={{ paddingRight: 1040 }} />

                    {known_for?.map(movie =>
                    (
                        <div key={randomKey++}>
                            <FirstMovieDiv>
                                <Title level={2}>{movie.title || movie.name}</Title>
                                <DisplayFlex>
                                    <Title level={4}>{movie.vote_average}/10</Title>
                                    <StarDiv>
                                        <StarTwoTone twoToneColor='#F28500' />
                                    </StarDiv>
                                </DisplayFlex>
                            </FirstMovieDiv>


                            <DisplayFlex>

                                <MovieImg src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />

                                <SecondMovieDiv>
                                    <Typography.Paragraph style={{ textAlign: 'start' }}>{movie.overview}</Typography.Paragraph>
                                    {/* <Title level={5} style={movie.overview.length ? { display: 'flex', justifyContent: 'flex-start' } : { display: 'flex', justifyContent: 'flex-start', marginTop: '30%' }}>Fecha de estreno: {movie.release_date}</Title> */}
                                    <Title level={5} style={movie.overview.length ? { display: 'flex', justifyContent: 'flex-start' }
                                        :
                                        { display: 'flex', justifyContent: 'flex-start', marginTop: '30%' }}>
                                        Fecha de estreno:
                                        {
                                            movie.release_date || movie.first_air_date ? `${ movie.release_date ? movie.release_date?.slice(8) : movie.first_air_date?.slice(8) } de
                                           ${ movie.release_date ? mes[movie.release_date?.slice(5, 7)] : mes[movie.first_air_date?.slice(5, 7)] } de
                                            ${ movie.release_date ? movie.release_date?.slice(0, 4) : movie.first_air_date?.slice(0, 4)}`
                                                :
                                                null
                                        }
                                    </Title>
                                </SecondMovieDiv>

                            </DisplayFlex>

                            <Divider style={{ paddingRight: 1040 }} />
                        </div>
                    )

                    )

                    }
                </Col>

            </Row>

        </DivContainer>
    )
}


function mapStateToProps(state) {
    return {
        data: state.data,
    }
}
export default connect(mapStateToProps)(SecondScreen);
