/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-alert",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class Alert {
  @Prop() status: string;

  render() {
    const { status } = this;
    return (
      <div class={clsx("utrecht-alert", status && `utrecht-alert--${status}`)}>
        <div class="utrecht-alert__content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
