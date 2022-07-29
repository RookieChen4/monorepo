import React from "react";
import styles from './Child.module.less';
import { getToken } from "../utils/auth";
export default function Child1() {
  const token = getToken();
  console.log('token', token);
    return (
      <>
        <main>
          <p className={ styles.title}>react子页面1</p>
        </main>
      </>
    );
}