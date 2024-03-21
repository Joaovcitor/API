"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
// import loginRequired from '../middlewares/loginRequired';

const router = new (0, _express2.default)();
// NÃO DEVERIA EXISTIR
router.get('/', _UserController2.default.index);
// router.get('/:id', userController.show);

router.post('/', _UserController2.default.store);
router.put('/', _UserController2.default.update);
router.delete('/', _UserController2.default.delete);

exports. default = router;
