import chai, { expect } from 'chai';
import app from '../../src/index';
import chaiHttp from "chai-http";

import { User } from '../../src/interface/user.interface';

chai.use(chaiHttp);

describe('Users', () => {
    let createdUser: User;
    let usersList: User[];

    describe('LIST USERS', () => {
        it('should list all users', done => {
            chai.request(app)
                .get('/user')
                .send({})
                .end((err, res) => {
                    console.log(res.body);
                    expect(err).to.be.null;
                    expect(res).to.have.statusCode(200);

                    const { users } = res.body;
                    usersList = users;
                    expect(users).to.be.a('array');

                    done();
                })
        });
    });
    describe('CREATE USER', () => {
        it.only('should create a new user', done => {
            chai.request(app)
                .post('/user')
                .send({ firstName: 'Maria Fernanda', note: 'Created with unit testing', lastName: 'Rodriguez' })
                .end((err, res) => {
                    expect(err).to.be.null;
                    const { ok, user } = res.body;
                    createdUser = user;

                    expect(ok).to.be.true;
                    expect(res.body).to.have.a('object');
                    done();
                })
        })
        it('should not create a new user', done => {
            chai.request(app)
                .post('/user')
                .send({ firstName: 'Sergio', lastName: 'Ramirez' })
                .end((err, res) => {
                    expect(err).to.not.be.null;
                    done();
                })
        })
    });
    describe('UPDATE USER', () => {
        it('Should update the user', done => {
            chai.request(app)
                .put(`/user/${createdUser._id}`)
                .send({ note: 'Updated with unit testing' })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    done();
                })
        })
    });
    describe('DELETE USER', () => [
        it('should remove the user', done => {
            chai.request(app)
                .put(`/user/${createdUser._id}`)
                .send({})
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    done();
                })
        })
    ])
})