import './BarNews.css';

export const BarNews = () => {

    // data
    function dataHoje (){
        const dataAgora = new Date();
        const dataFormatada = dataAgora.toLocaleDateString('pt-BR');
        return dataFormatada;
    }

    return (

            <div className="BackgroundGreenDark py-2">
                <div className="container d-flex align-items-center justify-content-between text-white">
                    <h5 className='p-1 m-0'>NOTÍCIAS DO COTIDIANO</h5>
                    <p className='p-1 m-0  text-dark'>
                        Handbank busca ser um banco na palma da mão e gerar valores
                    </p>
                    <div className='p-1 m-0 text-dark'>{dataHoje()}</div>
                </div>
            </div>
    )
}