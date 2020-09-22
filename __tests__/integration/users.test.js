
describe('GET /users', () => {
    const defaultUser = {
        name: "default name",
        email: "default email",
        company: "default company name"
      }

      it("should be return a list of users", async () => {

        console.log(defaultUser);
        expect(defaultUser.email).toBe("default email");
      })

})
    
