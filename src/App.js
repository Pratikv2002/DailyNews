import "./App.css";
import React, { Component } from "react";
import NavBar from "./Componant/NavBar";
import News from "./Componant/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state = {
    progress:10,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color={'red'}
            progress={this.state.progress}
          />
          <NavBar setCode={this.setCode} code={this.state.code}/>
          <Routes >
            <Route exact path="/ae"element={<News setProgress={this.setProgress}  key="ae" country="ae" />}></Route>
            <Route exact path="/ar"element={<News setProgress={this.setProgress}  key="ar" country="ar" />}></Route>
            <Route exact path="/at"element={<News setProgress={this.setProgress}  key="at" country="at" />}></Route>
            <Route exact path="/au"element={<News setProgress={this.setProgress}  key="au" country="au" />}></Route>
            <Route exact path="/be"element={<News setProgress={this.setProgress}  key="be" country="be" />}></Route>
            <Route exact path="/bg"element={<News setProgress={this.setProgress}  key="bg" country="bg" />}></Route>
            <Route exact path="/br"element={<News setProgress={this.setProgress}  key="br" country="br" />}></Route>
            <Route exact path="/ca"element={<News setProgress={this.setProgress}  key="ca" country="ca" />}></Route>
            <Route exact path="/ch"element={<News setProgress={this.setProgress}  key="ch" country="ch" />}></Route>
            <Route exact path="/cn"element={<News setProgress={this.setProgress}  key="cn" country="cn" />}></Route>
            <Route exact path="/co"element={<News setProgress={this.setProgress}  key="co" country="co" />}></Route>
            <Route exact path="/cu"element={<News setProgress={this.setProgress}  key="cu" country="cu" />}></Route>
            <Route exact path="/cz"element={<News setProgress={this.setProgress}  key="cz" country="cz" />}></Route>
            <Route exact path="/de"element={<News setProgress={this.setProgress}  key="de" country="de" />}></Route>
            <Route exact path="/eg"element={<News setProgress={this.setProgress}  key="eg" country="eg" />}></Route>
            <Route exact path="/fr"element={<News setProgress={this.setProgress}  key="fr" country="fr" />}></Route>
            <Route exact path="/gb"element={<News setProgress={this.setProgress}  key="gb" country="gb" />}></Route>
            <Route exact path="/gr"element={<News setProgress={this.setProgress}  key="gr" country="gr" />}></Route>
            <Route exact path="/hk"element={<News setProgress={this.setProgress}  key="hk" country="hk" />}></Route>
            <Route exact path="/hu"element={<News setProgress={this.setProgress}  key="hu" country="hu" />}></Route>
            <Route exact path="/id"element={<News setProgress={this.setProgress}  key="id" country="id" />}></Route>
            <Route exact path="/ie"element={<News setProgress={this.setProgress}  key="ie" country="ie" />}></Route>
            <Route exact path="/il"element={<News setProgress={this.setProgress}  key="il" country="il" />}></Route>
            <Route exact path="/in"element={<News setProgress={this.setProgress}  key="in" country="in" />}></Route>
            <Route exact path="/it"element={<News setProgress={this.setProgress}  key="it" country="it" />}></Route>
            <Route exact path="/jp"element={<News setProgress={this.setProgress}  key="jp" country="jp" />}></Route>
            <Route exact path="/kr"element={<News setProgress={this.setProgress}  key="kr" country="kr" />}></Route>
            <Route exact path="/lt"element={<News setProgress={this.setProgress}  key="lt" country="lt" />}></Route>
            <Route exact path="/lv"element={<News setProgress={this.setProgress}  key="lv" country="lv" />}></Route>
            <Route exact path="/ma"element={<News setProgress={this.setProgress}  key="ma" country="ma" />}></Route>
            <Route exact path="/mx"element={<News setProgress={this.setProgress}  key="mx" country="mx" />}></Route>
            <Route exact path="/my"element={<News setProgress={this.setProgress}  key="my" country="my" />}></Route>
            <Route exact path="/ng"element={<News setProgress={this.setProgress}  key="ng" country="ng" />}></Route>
            <Route exact path="/nl"element={<News setProgress={this.setProgress}  key="nl" country="nl" />}></Route>
            <Route exact path="/no"element={<News setProgress={this.setProgress}  key="no" country="no" />}></Route>
            <Route exact path="/nz"element={<News setProgress={this.setProgress}  key="nz" country="nz" />}></Route>
            <Route exact path="/ph"element={<News setProgress={this.setProgress}  key="ph" country="ph" />}></Route>
            <Route exact path="/pl"element={<News setProgress={this.setProgress}  key="pl" country="pl" />}></Route>
            <Route exact path="/pt"element={<News setProgress={this.setProgress}  key="pt" country="pt" />}></Route>
            <Route exact path="/ro"element={<News setProgress={this.setProgress}  key="ro" country="ro" />}></Route>
            <Route exact path="/rs"element={<News setProgress={this.setProgress}  key="rs" country="rs" />}></Route>
            <Route exact path="/ru"element={<News setProgress={this.setProgress}  key="ru" country="ru" />}></Route>
            <Route exact path="/sa"element={<News setProgress={this.setProgress}  key="sa" country="sa" />}></Route>
            <Route exact path="/se"element={<News setProgress={this.setProgress}  key="se" country="se" />}></Route>
            <Route exact path="/sg"element={<News setProgress={this.setProgress}  key="sg" country="sg" />}></Route>
            <Route exact path="/si"element={<News setProgress={this.setProgress}  key="si" country="si" />}></Route>
            <Route exact path="/sk"element={<News setProgress={this.setProgress}  key="sk" country="sk" />}></Route>
            <Route exact path="/th"element={<News setProgress={this.setProgress}  key="th" country="th" />}></Route>
            <Route exact path="/tr"element={<News setProgress={this.setProgress}  key="tr" country="tr" />}></Route>
            <Route exact path="/tw"element={<News setProgress={this.setProgress}  key="tw" country="tw" />}></Route>
            <Route exact path="/us"element={<News setProgress={this.setProgress}  key="us" country="us" />}></Route>
            <Route exact path="/us"element={<News setProgress={this.setProgress}  key="us" country="us" />}></Route>
            <Route exact path="/ve"element={<News setProgress={this.setProgress}  key="ve" country="ve" />}></Route>
            <Route exact path="/za"element={<News setProgress={this.setProgress}  key="za" country="za" />}></Route>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="home" category="general" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress}  key="business" category="business" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" />}
            ></Route>
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress}  key="general" category="general" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress}  key="health" category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress}  key="science" category="science" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress}  key="sports" category="sports" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={<News setProgress={this.setProgress}  key="technology" category="technology" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
