import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Title } = Typography;


export default function FirstScreen() {
    const [state, setState] = useState(false);
    const { Dragger } = Upload;
    const history = useHistory();
    const goResult = () => history.push('result');

    useEffect(() => {
        state && goResult();
    }, [state])



    let apiKey = 'MzNiZDI5NzQtYTNkZS00MmZjLWE4ZmYtN2ExN2NjY2MwYTFm';

    const props = {
        name: 'file',
        multiple: true,

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
                setState(info.file.response);
                // console.log('ACA', info.file.response);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
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
