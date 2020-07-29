import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './sideMenu.scss'

interface IBGEUFResponse {
    nome: string;
}

const SideMenu = () => {
    const [menuUf, setMenuUf] = useState<string[]>([])

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.nome)
            setMenuUf(ufInitials)
        })
    },[])

    return (
        <div className="app-side-menu">
            <div className="box-side-menu">
                <div className="group-box-menu">
                    {menuUf.map((menuUf: string) => (
                        <div key={menuUf} className="listContentMenu">
                            {menuUf}
                            <span>
                                Capital
                            </span>
                        </div>
                    ))}

                    {/* <div className="listContentMenu">
                        São Paulo
                        <span>
                            São Paulo
                        </span>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default SideMenu