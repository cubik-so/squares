'use client'

import React, { useState } from 'react'
import { MyConfetti } from '@squares/ui'

const ModalPage = () => {
    const [modalOn, setModalOn] = useState<boolean>(false)
    return (
        <div>
            <MyConfetti />
            {/* <CubikTable columns={[]} data={[]} showHeader></CubikTable> */}
        </div>
    )
}
export default ModalPage
