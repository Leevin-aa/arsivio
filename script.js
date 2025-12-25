

const viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: "ruang1",
        author: "Radhi",
        autoLoad: true,
        autoRotate: -2,   // Smooth rotation
        friction: 0.15,   // Gerakan halus seperti Street View
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
            compass: true,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 8,
                    type: "scene",
                    sceneId: "ruang2",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 8,
                    type: "scene",
                    sceneId: "ruang1",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang3",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: -50,
                    type: "scene",
                    sceneId: "ruang4",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 10,
                    type: "scene",
                    sceneId: "",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: -100,
                    type: "scene",
                    sceneId: "ruang2",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: 120,
                    type: "scene",
                    sceneId: "",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: 60,
                    type: "scene",
                    sceneId: "",
                    text: ""
                },
                {
                    pitch: -2,
                    yaw: 210,
                    type: "scene",
                    sceneId: "ruang4",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -90,
                    type: "scene",
                    sceneId: "ruang5",
                    text: ""
                },
                {
                    pitch: 0,
                    yaw: 180,
                    type: "scene",
                    sceneId: "ruang2",
                    text: ""
                },
                {
                    pitch: 0,
                    yaw: 190,
                    type: "scene",
                    sceneId: "ruang3",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -80,
                    type: "scene",
                    sceneId: "ruang4",
                    text: "",
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: "scene",
                    sceneId: "ruang6",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 130,
                    type: "scene",
                    sceneId: "ruang5",
                    text: ""
                    
                },
                {
                    pitch: 0,
                    yaw: -145,
                    type: "scene",
                    sceneId: "ruang7",
                    text: ""
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
            compass: true,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 130,
                    type: "scene",
                    sceneId: "",
                    text: ""
                }
            ]
        }
    }
});
