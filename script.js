

const viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: "ruang1",
        author: "Arsivio Team",
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
                    text: "Klasik"
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
                    text: "Klasik"
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "Hindu - Budha"
                },
                {
                    pitch: -2,
                    yaw: -50,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "Prasejarah"
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
                    sceneId: "ruangtambah1",
                    text: "Kolonial"
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang2",
                    text: "Klasik"
                },
                {
                    pitch: -2,
                    yaw: 120,
                    type: "scene",
                    sceneId: "ruang7",
                    text: "Hindu - Budha"
                },
                {
                    pitch: -2,
                    yaw: 60,
                    type: "scene",
                    sceneId: "ruang9",
                    text: "islam"
                },
                {
                    pitch: -2,
                    yaw: 210,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "Kolonial"
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
                    text: "Hindu - Budha"
                },
                {
                    pitch: 0,
                    yaw: 180,
                    type: "scene",
                    sceneId: "ruang2",
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: 190,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "Hindu - Budha"
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
                    text: "Klasik",
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: "scene",
                    sceneId: "ruang6",
                    text: "Hindu - Budha",
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
                    text: "Hindu - Budha"

                },
                {
                    pitch: 0,
                    yaw: -145,
                    type: "scene",
                    sceneId: "ruang7",
                    text: "Hindu - Budha"
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
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: 35,
                    type: "scene",
                    sceneId: "ruang6",
                    text: "Hindu - Budha"
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
                    text: "Hindu - Budha"
                },
                {
                    pitch: 0,
                    yaw: -95,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "Banyuwangi Tempoe Doeloe"
                },
                {
                    pitch: 0,
                    yaw: -160,
                    type: "scene",
                    sceneId: "ruang10",
                    text: "Kolonial"
                }
            ]
        },
          ruangtambah1: {
            title: "Arsivio.st",
            type: "equirectangular",
            panorama: "newstreetview/2.png",
            hfov: 200,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 120,
                    type: "scene",
                    sceneId: "ruang3",
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: 65,
                    type: "scene",
                    sceneId: "ruang9",
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: 10,
                    type: "scene",
                    sceneId: "ruang8",
                    text: "Klasik"
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
                    text: "Hindu - Budha"
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
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: 35,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "Banyuwangi Tempoe Doeloe"
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
                    text: "Klasik"
                },
                {
                    pitch: 0,
                    yaw: -125,
                    type: "scene",
                    sceneId: "ruang12",
                    text: "Banyuwangi Tempoe Doeloe"
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
                    text: "Banyuwangi Tempoe Doeloe"
                },
                {
                    pitch: 0,
                    yaw: 43,
                    type: "scene",
                    sceneId: "ruang11",
                    text: "Banyuwangi Tempoe Doeloe"
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
                    text: "Banyuwangi Tempoe Doeloe"
                },
                {
                    pitch: 0,
                    yaw: -70,
                    type: "scene",
                    sceneId: "ruang14",
                    text: "Banyuwangi Tempoe Doeloe"
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
                    text: "Banyuwangi Tempoe Doeloe"
                }
                
            ]
        }
        
    }
});
