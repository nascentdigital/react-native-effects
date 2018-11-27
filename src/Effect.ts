import React, {Component} from "react";
import {Flow} from "./Flow";
import {Animation} from "./Animation";


export class Effect extends Component {

    static from(effect: Animation) : Component {
        return null;
    }

    static sequence(...effects: Animation[]) : Component {
        return Effect.from(Flow.sequence(effects));
    }

    static parallel(...effects: Animation[]) : Component {
        return Effect.from(Flow.parallel(effects));
    }
}


function todo() {
    const SlideIn = Effect.sequence(
        Animation.slide().from(0).to(-10),
    );


}