'use client'

import React, { useState } from 'react'
import { Button } from '@squares/ui'
import { Modal } from '@squares/ui'
import { ModalHeader } from '@squares/ui'

const ModalPage = () => {
    const [modalOn, setModalOn] = useState<boolean>(false)
    return (
        <div>
            <Modal open={false} className="" onClose={() => setModalOn(false)} size="lg">
                {JSON.stringify(modalOn)}
            </Modal>
            <Button variant="primary" onClick={() => alert(true)}>
                {' asdfasdfsafdsaadsdf '}
            </Button>
        </div>
    )
}
export default ModalPage
