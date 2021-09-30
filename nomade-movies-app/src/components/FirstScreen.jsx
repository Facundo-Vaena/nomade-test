import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setData } from '../actions';
import { DivContainer, DraggerContainer } from '../styles/First';

const { Title } = Typography;


export function FirstScreen({ setData }) {
    const [state, setState] = useState(false);
    const { Dragger } = Upload;
    const history = useHistory();
    const goResult = () => history.push('result');

    const error = () => {
        window.location.reload();

        return message.error('Actor no encontrado');
    }

    useEffect(() => {
        if (state) {
            setData(state)
                .then(() => {
                    goResult();
                })
        }
    }, [state])




    const props = {
        name: 'file',
        multiple: false,

        headers: {
            "Nomada": process.env.REACT_APP_API_KEY,
        },

        action: 'https://whois.nomada.cloud/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            }
            if (status === 'done') {
                return info.file.response.actorName !== "" ? setState(info.file.response.actorName) : error();

            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload(file) {
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                message.error(`El formato del archivo ${file.name} no es válido `)
                return Upload.LIST_IGNORE;
            } else {
                setState(false);
                return setData();
            }
        }
    };


    return (
        <DivContainer>
            <Title>¿Quién es este actor?</Title>
            <DraggerContainer>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                    <p className="ant-upload-hint">
                        Selecciona la foto de un actor famoso para conocer quién es y en qué peliculas ha salido.
                    </p>
                </Dragger>
            </DraggerContainer>

        </DivContainer>
    );

}

function mapStateToProps(state) {
    return {
        data: state.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (name) => dispatch(setData(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);

