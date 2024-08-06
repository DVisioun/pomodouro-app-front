import React from 'react'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'

function Checklist({ center = '' }) {
    return (
        <div className="space-y-3">
            <CustomCheckbox center={center} task="Estudar para a prova de matemática" />
            <CustomCheckbox center={center} task="Fazer requisição API no projeto" />
            <CustomCheckbox center={center} task="Atualizar a planilha pessoal" />
        </div>
    )
}

export default Checklist