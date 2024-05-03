'use client'

import React, { useState } from 'react'
import { Button } from '@squaress/ui'
import { Modal } from '@squaress/ui'
import { ModalHeader } from '@squaress/ui'

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
