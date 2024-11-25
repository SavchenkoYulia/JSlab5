"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValidator = void 0;
exports.articleValidator = {
    validate: function (data) {
        var errors = [];
        if (!data.title) errors.push("Title cannot be empty");
        if (!data.body) errors.push("Body cannot be empty");
        return { isValid: errors.length === 0, errors: errors };
    },
};
