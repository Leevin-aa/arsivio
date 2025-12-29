

const viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: "ruang1",
        author: "Radhi",
        autoLoad: true,
        autoRotate: -2,   
        mouseZoom: true
    },

    scenes: {
        ruang1: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 8,
                    type: "scene",
                    sceneId: "ruang2",
                    text: "ruang2"
                }
            ]
        },

        ruang2: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama2.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 8,
                    type: "scene",
                    sceneId: "ruang1",
                    text: "ruang1"
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "ruang3"
                },
                {
                    pitch: -2,
                    yaw: -50,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "ruang4"
                }
            ],
        },
        ruang3: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama3.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 10,
                    type: "scene",
                    sceneId: "ruang8",
                    text: "ruang8"
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang2",
                    text: "ruang2"
                },
                {
                    pitch: -2,
                    yaw: 120,
                    type: "scene",
                    sceneId: "ruang7",
                    text: "ruang7"
                },
                {
                    pitch: -2,
                    yaw: 60,
                    type: "scene",
                    sceneId: "ruang9",
                    text: "ruang9"
                },
                {
                    pitch: -2,
                    yaw: 210,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "ruang4"
                }
            ],
        },
        ruang4: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama4.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -90,
                    type: "scene",
                    sceneId: "ruang5",
                    text: "ruang5"
                },
                {
                    pitch: 0,
                    yaw: 180,
                    type: "scene",
                    sceneId: "ruang2",
                    text: "ruang2"
                },
                {
                    pitch: 0,
                    yaw: 190,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "ruang3"
                },
            ]
        },
        ruang5: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama5.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -80,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "ruang4",
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: "scene",
                    sceneId: "ruang6",
                    text: "ruang6",
                },
            ]
        },
        ruang6: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama6.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 130,
                    type: "scene",
                    sceneId: "ruang5",
                    text: "ruang5"

                },
                {
                    pitch: 0,
                    yaw: -145,
                    type: "scene",
                    sceneId: "ruang7",
                    text: "ruang7"
                }
            ]
        },
        ruang7: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama7.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 130,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "ruang3"
                },
                {
                    pitch: 0,
                    yaw: 35,
                    type: "scene",
                    sceneId: "ruang6",
                    text: "ruang6"
                }
            ]
        },
        ruang8: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama8.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 105,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "ruang3"
                },
                {
                    pitch: 0,
                    yaw: -95,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "ruang11"
                },
                {
                    pitch: 0,
                    yaw: -160,
                    type: "scene",
                    sceneId: "ruang10",
                    text: "ruang10"
                }
            ]
        },
        ruang9: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama9.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -20,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "ruang3"
                },
                
            ]
        },
        ruang10: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama10.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 110,
                    type: "scene",
                    sceneId: "ruang8",
                    text: "ruang8"
                },
                {
                    pitch: 0,
                    yaw: 35,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "ruang11"
                }
            ]
        },
        ruang11: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama11.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 135,
                    type: "scene",
                    sceneId: "ruang8",
                    text: "ruang8"
                },
                {
                    pitch: 0,
                    yaw: -125,
                    type: "scene",
                    sceneId: "ruang12",
                    text: "ruang12"
                },
            ]
        },
        ruang12: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama12.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -175,
                    type: "scene",
                    sceneId: "ruang13",
                    text: "ruang13"
                },
                {
                    pitch: 0,
                    yaw: 43,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "ruang11"
                },
            ]
        },
        ruang13: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama13.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 110,
                    type: "scene",
                    sceneId: "ruang12",
                    text: "ruang12"
                },
                {
                    pitch: 0,
                    yaw: -70,
                    type: "scene",
                    sceneId: "ruang14",
                    text: "ruang14"
                }
            ]
        },
        ruang14: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "fotostreetview/utama14.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 115,
                    type: "scene",
                    sceneId: "ruang13",
                    text: "ruang13"
                }
                
            ]
        }
        
    }
});
