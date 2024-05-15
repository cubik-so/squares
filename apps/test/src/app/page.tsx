'use client'

import {
    Button,
    // Modal,
    // VaulDrawer,
    // VaulDrawerContent,
    // VaulDrawerOverlay,
    // VaulDrawerPortal,
    ResponsiveModal,
} from '@squaress/ui'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button
                onClick={() => {
                    setIsOpen(true)
                    console.log('button comp call')
                }}
            >
                button
            </Button>
            <ResponsiveModal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="p-4">
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                    <h2 className="text-lg font-bold">Drawer Content</h2>
                    <p>This is the content inside the drawer.</p>
                    <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit
                        provident quos, itaque tenetur, maxime molestias dolores officia quae,
                        cumque id sint? Dolorum pariatur labore deleniti rem vero magnam odio.
                    </div>
                </div>
            </ResponsiveModal>
            {/* <VaulDrawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
             
                <VaulDrawerPortal>
                    <VaulDrawerOverlay />
                    <VaulDrawerContent>
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Drawer Content</h2>
                            <p>This is the content inside the drawer.</p>
                            <button onClick={() => setIsOpen(false)}>Close Drawer</button>
                        </div>
                    </VaulDrawerContent>
                </VaulDrawerPortal>
            </VaulDrawer> */}
        </main>
    )
}
