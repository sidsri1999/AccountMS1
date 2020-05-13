package com.cg;

import java.util.List;

import javax.persistence.EntityManager;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.cg.entities.WalletUser;
import com.cg.services.AccountServiceImpl;
import com.cg.services.IAccountService;
import com.cg.services.IUserService;
import com.cg.services.UserServiceImpl;

@DataJpaTest
@ExtendWith(SpringExtension.class)
@Import({UserServiceImpl.class,AccountServiceImpl.class})
@AutoConfigureTestDatabase(replace = Replace.NONE)
class UserServiceTests {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IAccountService accountService;
	
	@Autowired
	EntityManager entityManager;
	
	@Test
	public void testAddUser() {
		WalletUser user = new WalletUser();
		user.setUserName("Siddhant");
		user.setPassword("sidsri");
		user.setPhoneNumber("12345544321"); 
		WalletUser result = userService.addUser(user);
		List<WalletUser> fetched = entityManager.createQuery("from WalletUser").getResultList();
        int size = fetched.size();
        WalletUser expected = fetched.get(size-1);
        System.out.println(expected);
        System.out.println(result);
        Assertions.assertEquals(expected, result);
	}
	
	@Test
	public void testGetUser() {
		WalletUser user = new WalletUser();
		user.setUserName("Siddhant");
		user.setPassword("sidsri");
		user.setPhoneNumber("12345544321"); 
		WalletUser user1 = userService.addUser(user);
		List<WalletUser> fetched = entityManager.createQuery("from WalletUser").getResultList();
        int size = fetched.size();
        WalletUser expected = fetched.get(size-1);
        WalletUser result = userService.getUser(user1.getUserId());
        System.out.println(expected);
        System.out.println(result);
        Assertions.assertEquals(expected, result);
	}
	
	@Test
	public void testGetAllUser() {
		List<WalletUser> expected = entityManager.createQuery("from WalletUser").getResultList();
        List<WalletUser> result = userService.getAllUsers();
        System.out.println(expected);
        System.out.println(result);
        Assertions.assertEquals(expected, result);
	}
	
//	@Test
//	public void testChangePassword() {
//		WalletUser user = new WalletUser();
//		user.setUserName("Siddhant");
//		user.setPassword("sidsri");
//		user.setPhoneNumber("12345544321"); 
//		WalletUser user1 = userService.addUser(user);
//		WalletUser user2
//		WalletUser user3 = userService.changePassword(user1.getUserId(), user1)
//		List<WalletUser> fetched = entityManager.createQuery("from WalletUser").getResultList();
//        int size = fetched.size();
//        WalletUser expected = fetched.get(size-1);
//        WalletUser result = userService.getUser(user1.getUserId());
//        System.out.println(expected);
//        System.out.println(result);
//        Assertions.assertEquals(expected, result);
//	}

}
