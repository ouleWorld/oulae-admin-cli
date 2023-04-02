"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPetsByTags = exports.findPetsByStatus = exports.uploadFile = exports.deletePet = exports.updatePetWithForm = exports.getPetById = exports.addPet = exports.updatePet = void 0;
// @ts-ignore
/* eslint-disable */
const max_1 = require("@umijs/max");
/** Update an existing pet PUT /pet */
async function updatePet(body, options) {
    return (0, max_1.request)('/pet', Object.assign({ method: 'PUT', headers: {
            'Content-Type': 'application/json',
        }, data: body }, (options || {})));
}
exports.updatePet = updatePet;
/** Add a new pet to the store POST /pet */
async function addPet(body, options) {
    return (0, max_1.request)('/pet', Object.assign({ method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, data: body }, (options || {})));
}
exports.addPet = addPet;
/** Find pet by ID Returns a single pet GET /pet/${param0} */
async function getPetById(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { petId: param0 } = params, queryParams = __rest(params, ["petId"]);
    return (0, max_1.request)(`/pet/${param0}`, Object.assign({ method: 'GET', params: Object.assign({}, queryParams) }, (options || {})));
}
exports.getPetById = getPetById;
/** Updates a pet in the store with form data POST /pet/${param0} */
async function updatePetWithForm(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, options) {
    const { petId: param0 } = params, queryParams = __rest(params, ["petId"]);
    const formData = new FormData();
    Object.keys(body).forEach((ele) => {
        const item = body[ele];
        if (item !== undefined && item !== null) {
            formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
        }
    });
    return (0, max_1.request)(`/pet/${param0}`, Object.assign({ method: 'POST', params: Object.assign({}, queryParams), data: formData }, (options || {})));
}
exports.updatePetWithForm = updatePetWithForm;
/** Deletes a pet DELETE /pet/${param0} */
async function deletePet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { petId: param0 } = params, queryParams = __rest(params, ["petId"]);
    return (0, max_1.request)(`/pet/${param0}`, Object.assign({ method: 'DELETE', headers: {}, params: Object.assign({}, queryParams) }, (options || {})));
}
exports.deletePet = deletePet;
/** uploads an image POST /pet/${param0}/uploadImage */
async function uploadFile(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, file, options) {
    const { petId: param0 } = params, queryParams = __rest(params, ["petId"]);
    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    }
    Object.keys(body).forEach((ele) => {
        const item = body[ele];
        if (item !== undefined && item !== null) {
            formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
        }
    });
    return (0, max_1.request)(`/pet/${param0}/uploadImage`, Object.assign({ method: 'POST', params: Object.assign({}, queryParams), data: formData, requestType: 'form' }, (options || {})));
}
exports.uploadFile = uploadFile;
/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
async function findPetsByStatus(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return (0, max_1.request)('/pet/findByStatus', Object.assign({ method: 'GET', params: Object.assign({}, params) }, (options || {})));
}
exports.findPetsByStatus = findPetsByStatus;
/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
async function findPetsByTags(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return (0, max_1.request)('/pet/findByTags', Object.assign({ method: 'GET', params: Object.assign({}, params) }, (options || {})));
}
exports.findPetsByTags = findPetsByTags;
