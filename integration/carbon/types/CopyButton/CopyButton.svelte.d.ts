/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";
import type { CopyProps } from "../Copy/Copy.svelte";

export interface CopyButtonProps extends CopyProps {
  /**
   * Set the title and ARIA label for the copy button
   * @default "Copy to clipboard"
   */
  iconDescription?: string;
}

export default class CopyButton extends SvelteComponentTyped<
  CopyButtonProps,
  {
    click: WindowEventMap["click"];
    animationend: WindowEventMap["animationend"];
  },
  {}
> {}
