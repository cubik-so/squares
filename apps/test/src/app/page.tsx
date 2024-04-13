'use client'
import { AvatarLabelGroup, Button } from '@squares/ui'

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button size="lg" variant="outline" leftIconName="plus">
                asdfsa
            </Button>
            <Button
                size="lg"
                variant="primary"
                isLoading={true}
                leftIconName="plus"
                loadingText="kladjsf aksdh"
                rightIconName="plus"
            >
                asdfsa
            </Button>
            <div className="flex justify-start gap-10">
                <div className="flex flex-col gap-8">
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="xs"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="sm"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="md"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="lg"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="xl"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        description="description"
                        subtitle="subtitle"
                        size="2xl"
                    />
                </div>

                <div className="flex flex-col gap-8">
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        // longDescription="Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                        subtitle="subtitle"
                        size="xs"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="square"
                        title="Title"
                        // longDescription="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        subtitle="subtitle"
                        size="sm"
                    />
                    <AvatarLabelGroup
                        avatarSrc={[
                            {
                                src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                                alt: 'sample image',
                            },
                            {
                                src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                                alt: 'sample image',
                            },
                            {
                                src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                                alt: 'sample image',
                            },
                            {
                                src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                                alt: 'sample image',
                            },
                            {
                                src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                                alt: 'sample image',
                            },
                        ]}
                        variant={'squared-horizontal'}
                        shape="square"
                        title="Title"
                        // longDescription="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        subtitle="subtitle"
                        size="md"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        // longDescription="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        subtitle="subtitle"
                        size="lg"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        // longDescription="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        subtitle="subtitle"
                        size="xl"
                    />
                    <AvatarLabelGroup
                        avatarSrc="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                        shape="circle"
                        title="Title"
                        // longDescription="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        subtitle="subtitle"
                        size="2xl"
                    />
                </div>
            </div>
        </main>
    )
}
