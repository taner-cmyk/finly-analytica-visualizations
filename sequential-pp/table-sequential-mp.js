!function (e, R) { "object" == typeof exports && "object" == typeof module ? module.exports = R() : "function" == typeof define && define.amd ? define("dscc", [], R) : "object" == typeof exports ? exports.dscc = R() : e.dscc = R() }(window, function () {
    return t = {}, n.m = C = {
        "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function (e, N, R) {
                "use strict"; var i = this && this.__assign || function () { return (i = Object.assign || function (e) { for (var R, C = 1, t = arguments.length; C < t; C++)for (var n in R = arguments[C]) Object.prototype.hasOwnProperty.call(R, n) && (e[n] = R[n]); return e }).apply(this, arguments) }; Object.defineProperty(N, "__esModule", { value: !0 });
                /*!
                  @license
                  Copyright 2019 Google LLC
                
                  Licensed under the Apache License, Version 2.0 (the "License");
                  you may not use this file except in compliance with the License.
                  You may obtain a copy of the License at
                
                  https://www.apache.org/licenses/LICENSE-2.0
                
                  Unless required by applicable law or agreed to in writing, software
                  distributed under the License is distributed on an "AS IS" BASIS,
                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                  See the License for the specific language governing permissions and
                  limitations under the License.
                */
                var _ = R(/*! ./types */"./src/types.ts"); !function (e) { for (var R in e) N.hasOwnProperty(R) || (N[R] = e[R]) }(R(/*! ./types */"./src/types.ts")), N.getWidth = function () { return document.body.clientWidth }, N.getHeight = function () { return document.documentElement.clientHeight }, N.getComponentId = function () { var e = new URLSearchParams(window.location.search); if (null !== e.get("dscId")) return e.get("dscId"); throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new") }; function E(e) { return e.type === _.ConfigDataElementType.DIMENSION || e.type === _.ConfigDataElementType.METRIC } function r(e) { return e === _.ConfigDataElementType.DIMENSION ? -1 : 1 } function a(e) { var R = []; e.config.data.forEach(function (e) { e.elements.filter(E).forEach(function (e) { R.push(e) }) }); var C, t = (C = function (e, R) { return r(e.type) - r(R.type) }, R.map(function (e, R) { return { item: e, index: R } }).sort(function (e, R) { return C(e.item, R.item) || e.index - R.index }).map(function (e) { return e.item })), n = []; return t.forEach(function (e) { e.value.forEach(function () { return n.push(e.id) }) }), n } function o(R) { return function (e) { var C, t, n = {}; return t = R, ((C = e).length < t.length ? C.map(function (e, R) { return [e, t[R]] }) : t.map(function (e, R) { return [C[R], e] })).forEach(function (e) { var R = e[0], C = e[1]; void 0 === n[C] && (n[C] = []), n[C].push(R) }, {}), n } } N.fieldsByConfigId = function (e) { var R = e.fields.reduce(function (e, R) { return e[R.id] = R, e }, {}), C = {}; return e.config.data.forEach(function (e) { e.elements.filter(E).forEach(function (e) { C[e.id] = e.value.map(function (e) { return R[e] }) }) }), C }; function U(e) { var R = {}; return (e.config.style || []).forEach(function (e) { e.elements.forEach(function (e) { if (void 0 !== R[e.id]) throw new Error("styleIds must be unique. Your styleId: '" + e.id + "' is used more than once."); R[e.id] = { value: e.value, defaultValue: e.defaultValue } }) }, {}), R } function Y(e) { return e.config.themeStyle } function n(e) { switch (e) { case _.DSInteractionType.FILTER: return _.InteractionType.FILTER } } function s(e) { var R = e.config.interactions; return void 0 === R ? {} : R.reduce(function (e, R) { var C = R.supportedActions.map(n), t = { type: n(R.value.type), data: R.value.data }; return e[R.id] = { value: t, supportedActions: C }, e }, {}) } N.tableTransform = function (e) { return { tables: (R = e, t = N.fieldsByConfigId(R), n = a(R), E = {}, r = n.map(function (e) { void 0 === E[e] ? E[e] = 0 : E[e]++; var R = E[e], C = t[e][R]; return i(i({}, C), { configId: e }) }), (C = {})[_.TableType.DEFAULT] = { headers: [], rows: [] }, o = C, R.dataResponse.tables.forEach(function (e) { o[e.id] = { headers: r, rows: e.rows } }), o), fields: N.fieldsByConfigId(e), style: U(e), theme: Y(e), interactions: s(e) }; var R, C, t, n, E, r, o }, N.objectTransform = function (e) { return { tables: (t = a(R = e), (C = {})[_.TableType.DEFAULT] = [], n = C, R.dataResponse.tables.forEach(function (e) { var R = e.rows.map(o(t)); e.id === _.TableType.DEFAULT ? n[e.id] = R : (void 0 === n[e.id] && (n[e.id] = []), n[e.id] = n[e.id].concat(R)) }), n), fields: N.fieldsByConfigId(e), style: U(e), theme: Y(e), interactions: s(e) }; var R, C, t, n }; function u(e) { var R, C = !1; return e === N.tableTransform || e === N.objectTransform ? C = !0 : (R = !1, "identity" === e("identity") && (R = !0, console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")), R && (C = !0)), C } N.subscribeToData = function (R, C) { if (u(C.transform)) { var e = function (e) { e.data.type === _.MessageType.RENDER ? R(C.transform(e.data)) : console.error("MessageType: " + e.data.type + " is not supported by this version of the library.") }; window.addEventListener("message", e); var t = { componentId: N.getComponentId(), type: _.ToDSMessageType.VIZ_READY }; return window.parent.postMessage(t, "*"), function () { return window.removeEventListener("message", e) } } throw new Error("Only the built in transform functions are supported.") }, N.sendInteraction = function (e, R, C) { var t = N.getComponentId(), n = { type: _.ToDSMessageType.INTERACTION, id: e, data: C, componentId: t }; window.parent.postMessage(n, "*") }, N.clearInteraction = function (e, R) { N.sendInteraction(e, R, void 0) }
            }, "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function (e, R, C) { "use strict"; var t, n, E, r, o, N; Object.defineProperty(R, "__esModule", { value: !0 }), (t = R.ConceptType || (R.ConceptType = {})).METRIC = "METRIC", t.DIMENSION = "DIMENSION", (R.MessageType || (R.MessageType = {})).RENDER = "RENDER", (n = R.FieldType || (R.FieldType = {})).YEAR = "YEAR", n.YEAR_QUARTER = "YEAR_QUARTER", n.YEAR_MONTH = "YEAR_MONTH", n.YEAR_WEEK = "YEAR_WEEK", n.YEAR_MONTH_DAY = "YEAR_MONTH_DAY", n.YEAR_MONTH_DAY_HOUR = "YEAR_MONTH_DAY_HOUR", n.QUARTER = "QUARTER", n.MONTH = "MONTH", n.WEEK = "WEEK", n.MONTH_DAY = "MONTH_DAY", n.DAY_OF_WEEK = "DAY_OF_WEEK", n.DAY = "DAY", n.HOUR = "HOUR", n.MINUTE = "MINUTE", n.DURATION = "DURATION", n.COUNTRY = "COUNTRY", n.COUNTRY_CODE = "COUNTRY_CODE", n.CONTINENT = "CONTINENT", n.CONTINENT_CODE = "CONTINENT_CODE", n.SUB_CONTINENT = "SUB_CONTINENT", n.SUB_CONTINENT_CODE = "SUB_CONTINENT_CODE", n.REGION = "REGION", n.REGION_CODE = "REGION_CODE", n.CITY = "CITY", n.CITY_CODE = "CITY_CODE", n.METRO_CODE = "METRO_CODE", n.LATITUDE_LONGITUDE = "LATITUDE_LONGITUDE", n.NUMBER = "NUMBER", n.PERCENT = "PERCENT", n.TEXT = "TEXT", n.BOOLEAN = "BOOLEAN", n.URL = "URL", n.IMAGE = "IMAGE", n.CURRENCY_AED = "CURRENCY_AED", n.CURRENCY_ALL = "CURRENCY_ALL", n.CURRENCY_ARS = "CURRENCY_ARS", n.CURRENCY_AUD = "CURRENCY_AUD", n.CURRENCY_BDT = "CURRENCY_BDT", n.CURRENCY_BGN = "CURRENCY_BGN", n.CURRENCY_BOB = "CURRENCY_BOB", n.CURRENCY_BRL = "CURRENCY_BRL", n.CURRENCY_CAD = "CURRENCY_CAD", n.CURRENCY_CDF = "CURRENCY_CDF", n.CURRENCY_CHF = "CURRENCY_CHF", n.CURRENCY_CLP = "CURRENCY_CLP", n.CURRENCY_CNY = "CURRENCY_CNY", n.CURRENCY_COP = "CURRENCY_COP", n.CURRENCY_CRC = "CURRENCY_CRC", n.CURRENCY_CZK = "CURRENCY_CZK", n.CURRENCY_DKK = "CURRENCY_DKK", n.CURRENCY_DOP = "CURRENCY_DOP", n.CURRENCY_EGP = "CURRENCY_EGP", n.CURRENCY_ETB = "CURRENCY_ETB", n.CURRENCY_EUR = "CURRENCY_EUR", n.CURRENCY_GBP = "CURRENCY_GBP", n.CURRENCY_HKD = "CURRENCY_HKD", n.CURRENCY_HRK = "CURRENCY_HRK", n.CURRENCY_HUF = "CURRENCY_HUF", n.CURRENCY_IDR = "CURRENCY_IDR", n.CURRENCY_ILS = "CURRENCY_ILS", n.CURRENCY_INR = "CURRENCY_INR", n.CURRENCY_IRR = "CURRENCY_IRR", n.CURRENCY_ISK = "CURRENCY_ISK", n.CURRENCY_JMD = "CURRENCY_JMD", n.CURRENCY_JPY = "CURRENCY_JPY", n.CURRENCY_KRW = "CURRENCY_KRW", n.CURRENCY_LKR = "CURRENCY_LKR", n.CURRENCY_LTL = "CURRENCY_LTL", n.CURRENCY_MNT = "CURRENCY_MNT", n.CURRENCY_MVR = "CURRENCY_MVR", n.CURRENCY_MXN = "CURRENCY_MXN", n.CURRENCY_MYR = "CURRENCY_MYR", n.CURRENCY_NOK = "CURRENCY_NOK", n.CURRENCY_NZD = "CURRENCY_NZD", n.CURRENCY_PAB = "CURRENCY_PAB", n.CURRENCY_PEN = "CURRENCY_PEN", n.CURRENCY_PHP = "CURRENCY_PHP", n.CURRENCY_PKR = "CURRENCY_PKR", n.CURRENCY_PLN = "CURRENCY_PLN", n.CURRENCY_RON = "CURRENCY_RON", n.CURRENCY_RSD = "CURRENCY_RSD", n.CURRENCY_RUB = "CURRENCY_RUB", n.CURRENCY_SAR = "CURRENCY_SAR", n.CURRENCY_SEK = "CURRENCY_SEK", n.CURRENCY_SGD = "CURRENCY_SGD", n.CURRENCY_THB = "CURRENCY_THB", n.CURRENCY_TRY = "CURRENCY_TRY", n.CURRENCY_TWD = "CURRENCY_TWD", n.CURRENCY_TZS = "CURRENCY_TZS", n.CURRENCY_UAH = "CURRENCY_UAH", n.CURRENCY_USD = "CURRENCY_USD", n.CURRENCY_UYU = "CURRENCY_UYU", n.CURRENCY_VEF = "CURRENCY_VEF", n.CURRENCY_VND = "CURRENCY_VND", n.CURRENCY_YER = "CURRENCY_YER", n.CURRENCY_ZAR = "CURRENCY_ZAR", (E = R.TableType || (R.TableType = {})).DEFAULT = "DEFAULT", E.COMPARISON = "COMPARISON", E.SUMMARY = "SUMMARY", (r = R.ConfigDataElementType || (R.ConfigDataElementType = {})).METRIC = "METRIC", r.DIMENSION = "DIMENSION", r.MAX_RESULTS = "MAX_RESULTS", (o = R.ConfigStyleElementType || (R.ConfigStyleElementType = {})).TEXTINPUT = "TEXTINPUT", o.SELECT_SINGLE = "SELECT_SINGLE", o.CHECKBOX = "CHECKBOX", o.FONT_COLOR = "FONT_COLOR", o.FONT_SIZE = "FONT_SIZE", o.FONT_FAMILY = "FONT_FAMILY", o.FILL_COLOR = "FILL_COLOR", o.BORDER_COLOR = "BORDER_COLOR", o.AXIS_COLOR = "AXIS_COLOR", o.GRID_COLOR = "GRID_COLOR", o.OPACITY = "OPACITY", o.LINE_WEIGHT = "LINE_WEIGHT", o.LINE_STYLE = "LINE_STYLE", o.BORDER_RADIUS = "BORDER_RADIUS", o.INTERVAL = "INTERVAL", o.SELECT_RADIO = "SELECT_RADIO", (R.DSInteractionType || (R.DSInteractionType = {})).FILTER = "FILTER", (N = R.ToDSMessageType || (R.ToDSMessageType = {})).VIZ_READY = "vizReady", N.INTERACTION = "vizAction", (R.InteractionType || (R.InteractionType = {})).FILTER = "FILTER" }
    }, n.c = t, n.d = function (e, R, C) { n.o(e, R) || Object.defineProperty(e, R, { enumerable: !0, get: C }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (R, e) { if (1 & e && (R = n(R)), 8 & e) return R; if (4 & e && "object" == typeof R && R && R.__esModule) return R; var C = Object.create(null); if (n.r(C), Object.defineProperty(C, "default", { enumerable: !0, value: R }), 2 & e && "string" != typeof R) for (var t in R) n.d(C, t, function (e) { return R[e] }.bind(null, t)); return C }, n.n = function (e) { var R = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(R, "a", R), R }, n.o = function (e, R) { return Object.prototype.hasOwnProperty.call(e, R) }, n.p = "", n(n.s = "./src/index.ts"); function n(e) { if (t[e]) return t[e].exports; var R = t[e] = { i: e, l: !1, exports: {} }; return C[e].call(R.exports, R, R.exports, n), R.l = !0, R.exports } var C, t
});



let currentData = null, userDate1 = null, userDate2 = null;

function getRoot() {
    let root = document.getElementById("finly-table-container");
    if (!root) {
        root = document.createElement("div");
        root.id = "finly-table-container";
        document.body.innerHTML = "";
        document.body.appendChild(root);
    }
    return root;
}

const formatOption = (r) => String(r).length === 8 ? `${String(r).substring(0, 4)}/${String(r).substring(4, 6)}` : String(r);

function renderTable() {
    const root = getRoot();
    if (!currentData?.tables?.DEFAULT) return;

    const tData = currentData.tables.DEFAULT;
    const fields = currentData.fields;

    const isBank = tData.length > 0 && String(tData[0]?.sectorDim?.[0] || "").toLowerCase().includes("bank");
    const activeMetrics = isBank ? (fields.metricsBank || []) : (fields.metricsNonBank || []);
    const metricKey = isBank ? "metricsBank" : "metricsNonBank";

    if (!activeMetrics.length) return root.innerHTML = `<div style="padding:20px;text-align:center;color:#555;">Metrics eksik.</div>`;

    let dates = [...new Set(tData.map(r => r.dateDim[0]))].sort((a, b) => String(b).localeCompare(String(a)));

    if (!userDate1 || !dates.includes(userDate1)) userDate1 = dates[0];

    // MoM (Sıralı) Mantığı: Listedeki hemen bir önceki (ardışık) dönemi seç
    if (!userDate2 || !dates.includes(userDate2)) {
        let idx = dates.indexOf(userDate1);
        userDate2 = dates[idx + 1] || dates[0];
    }

    const row1 = tData.find(r => r.dateDim[0] === userDate1);
    const row2 = tData.find(r => r.dateDim[0] === userDate2);

    root.innerHTML = `
        <style>
            ::-webkit-scrollbar { display: none; }
            body, html, #finly-table-container { -ms-overflow-style: none; scrollbar-width: none; }
        </style>
        <table style="table-layout: fixed; width: 100%;">
            <colgroup>
                <col style="width: 45%;">
                <col style="width: 20%;">
                <col style="width: 20%;">
                <col style="width: 15%;">
            </colgroup>
            <thead>
                <tr>
                    <th>Özet Bilanço<br><span class="sub-title" style="margin-left:0;">Bin TRY</span></th>
                    ${[userDate1, userDate2].map((ud, idx) => `
                    <th>
                        <div class="dropdown-wrapper" style="position: relative;">
                            <div class="dropdown-trigger" id="trig-${idx + 1}" style="display: flex; justify-content: center; align-items: center; white-space: nowrap; gap: 4px;">
                                ${formatOption(ud)} ▾
                            </div>
                            <div id="dd${idx + 1}" class="dropdown-content">
                                ${dates.map(d => `<div class="dropdown-item d-opt-${idx + 1} ${d === ud ? 'selected' : ''}" data-val="${d}">${formatOption(d)}</div>`).join('')}
                            </div>
                        </div>
                    </th>`).join('')}
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                ${activeMetrics.map((m, i) => {
        const r1 = row1?.[metricKey]?.[i];
        const r2 = row2?.[metricKey]?.[i];

        if (!r1 && !r2 && r1 !== 0 && r2 !== 0) return '';

        const v1 = r1 ? Number(r1) : null;
        const v2 = r2 ? Number(r2) : null;
        const p = (v1 !== null && v2) ? Math.round(((v1 - v2) / Math.abs(v2)) * 100) : null;

        // Ekranda göstermek için Bin TRY hesabı
        const d1 = v1 !== null ? Math.round(v1 / 1000) : null;
        const d2 = v2 !== null ? Math.round(v2 / 1000) : null;

        return `<tr>
                        <td>${m.name}</td>
                        <td class="${d1 < 0 ? 'val-negative' : ''}">${d1 !== null ? d1.toLocaleString('tr-TR') : '-'}</td>
                        <td class="${d2 < 0 ? 'val-negative' : ''}">${d2 !== null ? d2.toLocaleString('tr-TR') : '-'}</td>
                        <td class="${p > 0 ? 'perc-up' : (p < 0 ? 'perc-down' : '')}">${p !== null ? `% ${p}` : 'N/A'}</td>
                    </tr>`;
    }).join('')}
            </tbody>
        </table>`;

    const d1 = document.getElementById('dd1'), d2 = document.getElementById('dd2');

    document.getElementById('trig-1').onclick = (e) => { e.stopPropagation(); d2.classList.remove('show'); d1.classList.toggle('show'); };
    document.getElementById('trig-2').onclick = (e) => { e.stopPropagation(); d1.classList.remove('show'); d2.classList.toggle('show'); };

    document.querySelectorAll('.d-opt-1').forEach(el => el.onclick = () => { userDate1 = el.getAttribute('data-val'); userDate2 = null; renderTable(); });
    document.querySelectorAll('.d-opt-2').forEach(el => el.onclick = () => { userDate2 = el.getAttribute('data-val'); renderTable(); });
}

const closeDD = () => {
    document.getElementById('dd1')?.classList.remove('show');
    document.getElementById('dd2')?.classList.remove('show');
};

document.addEventListener('click', (e) => { if (!e.target.closest('.dropdown-wrapper')) closeDD(); });
window.addEventListener('blur', closeDD);

function drawViz(data) { currentData = data; renderTable(); }
if (typeof dscc !== 'undefined') dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });