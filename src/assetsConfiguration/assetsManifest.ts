import {AssetsManifest} from "pixi.js";

export const playerResourcesManifest: AssetsManifest = {
    bundles: [
        {
            name: "dead",
            assets: [
                {
                    alias: "dead",
                    src: "public/assets/player/dead/dino-dead.png",
                },
                {
                    alias: "dead_outline",
                    src: "public/assets/player/dead/dino-dead-outline.png",
                }
            ]
        },
        {
            name: "duck",
            assets: [
                {
                    alias: "duck_1",
                    src: "public/assets/player/duck/dino-duck-1.png",
                },
                {
                    alias: "duck_2",
                    src: "public/assets/player/duck/dino-duck-2.png",
                }
            ]
        },
        {
            name: "idle",
            assets: [
                {
                    alias: "idle_1",
                    src: "public/assets/player/idle/dino-idle-1.png",
                },
                {
                    alias: "idle_2",
                    src: "public/assets/player/idle/dino-idle-2.png",
                }
            ]
        },
        {
            name: "run",
            assets: [
                {
                    alias: "run_1",
                    src: "public/assets/player/run/dino-run-1.png",
                },
                {
                    alias: "run_2",
                    src: "public/assets/player/run/dino-run-2.png",
                }
            ]
        },
        {
            name: "common",
            assets: [
                {
                    alias: "start",
                    src: "public/assets/player/dino-start.png",
                },
                {
                    alias: "ground",
                    src: "public/assets/ground.png"
                }
            ]
        },
        {
            name: "ui",
            assets: [
                {
                    alias: "restartButton",
                    src: "public/assets/button.png"
                }
            ]
        },
        {
            name: "obstacles",
            assets: [
                {
                    alias: "cactus_big_1",
                    src: "public/assets/obstacles/cactus-big-1.png",
                },
                {
                    alias: "cactus_big_2",
                    src: "public/assets/obstacles/cactus-big-2.png",
                },
                {
                    alias: "cactus_big_3",
                    src: "public/assets/obstacles/cactus-big-3.png",
                },
                {
                    alias: "cactus_small_1",
                    src: "public/assets/obstacles/cactus-small-1.png",
                },
                {
                    alias: "cactus_small_2",
                    src: "public/assets/obstacles/cactus-small-2.png",
                },
                {
                    alias: "cactus_small_3",
                    src: "public/assets/obstacles/cactus-small-3.png",
                }
            ]
        },
        {
            name: "bird",
            assets: [
                {
                    alias: "bird_1",
                    src: "public/assets/obstacles/bird/bird-1.png",
                },
                {
                    alias: "bird_2",
                    src: "public/assets/obstacles/bird/bird-2.png",
                },
            ]
        }
    ]
}