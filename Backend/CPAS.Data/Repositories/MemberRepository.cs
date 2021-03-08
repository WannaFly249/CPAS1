using CPAS.Core.Repositories;
using CPAS.Data.Models;
using CPAS.Data.Repositories.Generic;

namespace CPAS.Data.Repositories
{
    public interface IMemberRepository : IRepository<Member>
    {
    }

    public class MemberRepository : GenericRepository<Member>, IMemberRepository
    {
        private readonly CarparkDbContext _context;

        public MemberRepository(CarparkDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }
    }
}
