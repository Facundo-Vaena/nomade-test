import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setData } from '../actions';
// import { Redirect } from 'react-router-dom';

const { Title } = Typography;


export function FirstScreen({ data, setData }) {
    const [state, setState] = useState(false);
    const { Dragger } = Upload;
    const history = useHistory();
    const goResult = () =>{
        console.log('entré a goResult');
        history.push('result');
        }
    // const goResult2 = () => <Redirect to='/result' />

    // useEffect(() => {
    //     setState(false);
    //     console.log('data1', data)
    //     setData();
    //     console.log('data2', data);
    // }, []);

    useEffect( () => {
        if(state) {
            console.log('state', state);
            setData(state)
            .then(() => {
                console.log('dataa', data);
                goResult();
                // data !== '' && goResult();
                // data !== '' && console.log('data', data);
            })
            // console.log('dataa', data);
            // data !== '' && goResult();
        }
        // setData();
        // // console.log('state', state)
        // state && setData(state)
        //     .then(() => {
        //         // console.log('data3', data);
        //         data.length > 0 && goResult();

        //     })
        // data.length > 0 && goResult2();
    }, [state])



    let apiKey = 'MzNiZDI5NzQtYTNkZS00MmZjLWE4ZmYtN2ExN2NjY2MwYTFm';

    const props = {
        name: 'file',
        multiple: false,

        headers: {
            // ContentType: "multipart/form-data",
            "Nomada": apiKey,
        },
        
        action: 'https://whois.nomada.cloud/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                // message.success(`${info.file.name} file uploaded successfully.`);
                setState(info.file.response.actorName);
                // console.log('ACA', info.file.response);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload() {
            //el hook anda bien
            setState(false);
            setData();
        }
    };


    return (
        <div>
            <Title>¿Quién es este actor?</Title>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                <p className="ant-upload-hint">
                    Selecciona la foto de un actor famoso para conocer quién es y en qué peliculas ha salido.
                </p>
            </Dragger>
        </div>
        // mountNode
    );

}

function mapStateToProps(state) {
    return {
        data: state.data,
        // otherData: state.otherData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (name) => dispatch(setData(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);

