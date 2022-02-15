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
                .then(res => {
                    const { users } = res.body;
                    expect(users).to.be.an('array');
                    done();
                }).catch(error => done(error))
        });
    });
    describe('CREATE USER', () => {
        it('should create a new user', done => {
            chai.request(app)
                .post('/user')
                .send({ firstName: 'Maria Fernanda', note: 'Created with unit testing', lastName: 'Rodriguez' })
                .then(res => {
                    const { ok, user } = res.body;
                    expect(res.status).to.be.equal(201)
                    expect(user).to.be.an('object');
                    expect(ok).to.be.true;

                    createdUser = user;
                    done();
                }).catch(err => done(err));
        })
        it('should not create a new user', done => {
            chai.request(app)
                .post('/user')
                .send({ firstName: 'Sergio', lastName: 'Ramirez' })
                .then((res: any) => {
                    done();
                })
                .catch(err => {
                    done(err.errors._message);
                });
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